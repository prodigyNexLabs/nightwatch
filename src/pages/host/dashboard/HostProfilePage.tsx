import { useMutation, useQuery } from '@tanstack/react-query'
import type { FormEvent } from 'react'
import { useState } from 'react'
import Button from '../../../components/ui/Button'
import Card from '../../../components/ui/Card'
import Input from '../../../components/ui/Input'
import { fetchHostProfileSettings, updateHostProfileSettings } from '../../../services/hostApi'
import type { HostProfileSettings } from '../../../types/host'

const HostProfilePage = () => {
  const { data: profile } = useQuery({
    queryKey: ['host-profile-settings'],
    queryFn: fetchHostProfileSettings,
  })

  const [draft, setDraft] = useState<Partial<HostProfileSettings>>({})
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const current: HostProfileSettings = {
    displayName: draft.displayName ?? profile?.displayName ?? '',
    businessName: draft.businessName ?? profile?.businessName ?? '',
    phone: draft.phone ?? profile?.phone ?? '',
    city: draft.city ?? profile?.city ?? '',
    timezone: draft.timezone ?? profile?.timezone ?? '',
    supportEmail: draft.supportEmail ?? profile?.supportEmail ?? '',
    instantBooking: draft.instantBooking ?? profile?.instantBooking ?? false,
  }

  const updateMutation = useMutation({
    mutationFn: async () => updateHostProfileSettings(current),
    onSuccess: () => {
      setError('')
      setSuccess('Profile settings saved successfully.')
      setDraft({})
    },
    onError: (mutationError) => {
      const message = mutationError instanceof Error ? mutationError.message : 'Could not update profile.'
      setSuccess('')
      setError(message)
    },
  })

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')
    setSuccess('')

    if (
      !current.displayName ||
      !current.businessName ||
      !current.phone ||
      !current.city ||
      !current.timezone ||
      !current.supportEmail
    ) {
      setError('Please complete all required settings fields.')
      return
    }

    updateMutation.mutate()
  }

  return (
    <Card className="rounded-lg p-6">
      <h2 className="font-display text-2xl font-semibold text-crz-text">Host profile and settings</h2>
      <p className="mt-2 text-sm leading-7 text-crz-softText">
        Keep support and profile details accurate so request communication stays reliable.
      </p>

      <form className="mt-6 grid gap-3 sm:grid-cols-2" onSubmit={handleSubmit}>
        <Input
          value={current.displayName}
          onChange={(event) => setDraft((prev) => ({ ...prev, displayName: event.target.value }))}
          placeholder="Display name"
        />
        <Input
          value={current.businessName}
          onChange={(event) => setDraft((prev) => ({ ...prev, businessName: event.target.value }))}
          placeholder="Business name"
        />
        <Input
          value={current.phone}
          onChange={(event) => setDraft((prev) => ({ ...prev, phone: event.target.value }))}
          placeholder="Phone"
        />
        <Input
          value={current.city}
          onChange={(event) => setDraft((prev) => ({ ...prev, city: event.target.value }))}
          placeholder="City"
        />
        <Input
          value={current.timezone}
          onChange={(event) => setDraft((prev) => ({ ...prev, timezone: event.target.value }))}
          placeholder="Timezone"
        />
        <Input
          value={current.supportEmail}
          onChange={(event) => setDraft((prev) => ({ ...prev, supportEmail: event.target.value }))}
          placeholder="Support email"
          type="email"
        />

        <label className="col-span-full inline-flex items-center gap-3 rounded-md border border-crz-outline/40 bg-crz-surface px-3 py-2 text-sm text-crz-text">
          <input
            type="checkbox"
            checked={current.instantBooking}
            onChange={(event) => setDraft((prev) => ({ ...prev, instantBooking: event.target.checked }))}
            className="h-4 w-4"
          />
          Enable instant booking by default
        </label>

        {error ? <p className="col-span-full text-sm text-crz-error">{error}</p> : null}
        {success ? <p className="col-span-full text-sm text-crz-success">{success}</p> : null}

        <Button type="submit" size="lg" className="col-span-full sm:w-fit" disabled={updateMutation.isPending}>
          {updateMutation.isPending ? 'Saving...' : 'Save settings'}
        </Button>
      </form>
    </Card>
  )
}

export default HostProfilePage
