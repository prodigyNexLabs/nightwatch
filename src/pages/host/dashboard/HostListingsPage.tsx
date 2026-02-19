import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Plus } from 'lucide-react'
import { useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import Button from '../../../components/ui/Button'
import Card from '../../../components/ui/Card'
import Input from '../../../components/ui/Input'
import Modal from '../../../components/ui/Modal'
import Textarea from '../../../components/ui/Textarea'
import { createHostListing, fetchHostListings, updateHostListingStatus } from '../../../services/hostApi'
import { useHostAuthStore } from '../../../store/useHostAuthStore'
import type { HostListing, ListingStatus } from '../../../types/host'

const HostListingsPage = () => {
  const queryClient = useQueryClient()
  const hostUser = useHostAuthStore((state) => state.hostUser)

  const { data: listings = [] } = useQuery({
    queryKey: ['host-listings'],
    queryFn: fetchHostListings,
  })

  const [isCreateModalOpen, setCreateModalOpen] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [city, setCity] = useState('')
  const [addressLine, setAddressLine] = useState('')
  const [pricePerHour, setPricePerHour] = useState('')
  const [capacity, setCapacity] = useState('')
  const [error, setError] = useState('')

  const createMutation = useMutation({
    mutationFn: async () =>
      createHostListing(
        {
          title: title.trim(),
          description: description.trim(),
          city: city.trim(),
          addressLine: addressLine.trim(),
          pricePerHour: Number(pricePerHour),
          capacity: Number(capacity),
        },
        hostUser?.id,
      ),
    onSuccess: (newListing) => {
      queryClient.setQueryData<HostListing[]>(['host-listings'], (current = []) => [newListing, ...current])
      setTitle('')
      setDescription('')
      setCity('')
      setAddressLine('')
      setPricePerHour('')
      setCapacity('')
      setError('')
      setCreateModalOpen(false)
    },
    onError: (mutationError) => {
      const message = mutationError instanceof Error ? mutationError.message : 'Unable to create listing.'
      setError(message)
    },
  })

  const statusMutation = useMutation({
    mutationFn: async ({ listingId, status }: { listingId: string; status: ListingStatus }) => {
      await updateHostListingStatus(listingId, status)
      return { listingId, status }
    },
    onSuccess: ({ listingId, status }) => {
      queryClient.setQueryData<HostListing[]>(['host-listings'], (current = []) =>
        current.map((item) => (item.id === listingId ? { ...item, status } : item)),
      )
    },
  })

  const sortedListings = useMemo(
    () => [...listings].sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()),
    [listings],
  )

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')

    if (!title.trim() || !description.trim() || !city.trim() || !addressLine.trim()) {
      setError('Please complete all required listing fields.')
      return
    }

    if (!pricePerHour || Number(pricePerHour) <= 0) {
      setError('Price per hour must be greater than zero.')
      return
    }

    if (!capacity || Number(capacity) <= 0) {
      setError('Capacity must be greater than zero.')
      return
    }

    createMutation.mutate()
  }

  const handleStatusChange = (listingId: string, status: ListingStatus) => {
    statusMutation.mutate({ listingId, status })
  }

  return (
    <div className="space-y-6">
      <Card className="rounded-lg p-5 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h2 className="font-display text-2xl font-semibold text-crz-text">Manage listing status</h2>
            <p className="mt-2 text-sm leading-7 text-crz-softText">
              Create listings, then keep operational status accurate across draft, active, and paused states.
            </p>
          </div>

          <Button onClick={() => setCreateModalOpen(true)}>
            <Plus size={16} className="mr-2" />
            Add new listing
          </Button>
        </div>

        <div className="mt-6 space-y-3">
          {sortedListings.map((listing) => (
            <div key={listing.id} className="rounded-lg border border-crz-outline/70 bg-crz-surface p-4">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="font-display text-lg font-semibold text-crz-text">{listing.title}</p>
                  <p className="mt-1 text-sm text-crz-softText">{listing.city}</p>
                  <p className="mt-1 text-xs text-crz-softText">
                    ${listing.pricePerHour}/hr · capacity {listing.capacity}
                  </p>
                </div>

                <label className="text-xs uppercase tracking-[0.16em] text-crz-softText">
                  Status
                  <select
                    value={listing.status}
                    onChange={(event) =>
                      handleStatusChange(listing.id, event.target.value as ListingStatus)
                    }
                    className="mt-1 block rounded-md border border-crz-outline/80 bg-crz-surface px-2 py-1 text-sm text-crz-text"
                  >
                    <option value="draft">Draft</option>
                    <option value="active">Active</option>
                    <option value="paused">Paused</option>
                  </select>
                </label>
              </div>

              <p className="mt-3 text-sm text-crz-softText">{listing.description}</p>
            </div>
          ))}

          {sortedListings.length === 0 ? (
            <p className="rounded-md border border-dashed border-crz-outline/75 p-4 text-sm text-crz-softText">
              No listings found yet.
            </p>
          ) : null}
        </div>
      </Card>

      <Modal
        open={isCreateModalOpen}
        onClose={() => {
          if (!createMutation.isPending) {
            setCreateModalOpen(false)
          }
        }}
        title="Add new listing"
        description="New listings start in draft state so you can verify details before making them active."
      >
        <form className="space-y-3" onSubmit={handleSubmit}>
          <Input value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Listing title" />
          <Textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Listing description"
          />
          <Input value={city} onChange={(event) => setCity(event.target.value)} placeholder="City" />
          <Input
            value={addressLine}
            onChange={(event) => setAddressLine(event.target.value)}
            placeholder="Address line"
          />

          <div className="grid gap-3 sm:grid-cols-2">
            <Input
              value={pricePerHour}
              onChange={(event) => setPricePerHour(event.target.value)}
              type="number"
              min={1}
              placeholder="Price / hour"
            />
            <Input
              value={capacity}
              onChange={(event) => setCapacity(event.target.value)}
              type="number"
              min={1}
              placeholder="Capacity"
            />
          </div>

          {error ? <p className="text-sm text-crz-error">{error}</p> : null}

          <div className="flex flex-wrap justify-end gap-2 pt-1">
            <Button
              type="button"
              variant="ghost"
              onClick={() => setCreateModalOpen(false)}
              disabled={createMutation.isPending}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={createMutation.isPending}>
              {createMutation.isPending ? 'Creating listing...' : 'Create listing'}
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  )
}

export default HostListingsPage
