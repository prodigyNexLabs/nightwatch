import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useMemo, useState } from 'react'
import Button from '../../../components/ui/Button'
import Card from '../../../components/ui/Card'
import Textarea from '../../../components/ui/Textarea'
import { fetchHostIncomingRequests, respondToHostRequest } from '../../../services/hostApi'
import type { HostRequest } from '../../../types/host'

const HostRequestsPage = () => {
  const queryClient = useQueryClient()
  const { data: requests = [] } = useQuery({
    queryKey: ['host-requests'],
    queryFn: fetchHostIncomingRequests,
  })

  const [declineReasons, setDeclineReasons] = useState<Record<string, string>>({})
  const [error, setError] = useState('')

  const pendingRequests = useMemo(
    () => requests.filter((request) => request.status === 'pending'),
    [requests],
  )

  const responseMutation = useMutation({
    mutationFn: async ({
      requestId,
      action,
      reason,
    }: {
      requestId: string
      action: 'accept' | 'decline'
      reason?: string
    }) => {
      await respondToHostRequest(requestId, action, reason)
      return { requestId, action }
    },
    onSuccess: ({ requestId, action }) => {
      const status = action === 'accept' ? 'accepted' : 'rejected'

      queryClient.setQueryData<HostRequest[]>(['host-requests'], (current = []) =>
        current.map((item) => (item.id === requestId ? { ...item, status } : item)),
      )

      setDeclineReasons((current) => {
        const next = { ...current }
        delete next[requestId]
        return next
      })
      setError('')
    },
    onError: (mutationError) => {
      const message = mutationError instanceof Error ? mutationError.message : 'Could not update request.'
      setError(message)
    },
  })

  const onAccept = (requestId: string) => {
    responseMutation.mutate({ requestId, action: 'accept' })
  }

  const onReject = (requestId: string) => {
    const reason = (declineReasons[requestId] ?? '').trim()

    if (!reason) {
      setError('Please include a short reason before rejecting a request.')
      return
    }

    responseMutation.mutate({ requestId, action: 'decline', reason })
  }

  return (
    <div className="space-y-6">
      <Card className="rounded-lg p-5">
        <h2 className="font-display text-2xl font-semibold text-crz-text">Incoming requests</h2>
        <p className="mt-2 text-sm leading-7 text-crz-softText">
          Review pending booking requests and respond with accept/reject actions.
        </p>

        {error ? <p className="mt-4 text-sm text-crz-error">{error}</p> : null}

        <div className="mt-5 space-y-4">
          {pendingRequests.map((request) => (
            <div key={request.id} className="rounded-lg border border-crz-outline/35 bg-crz-surface p-4">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="font-display text-lg font-semibold text-crz-text">{request.guestName}</p>
                  <p className="text-sm text-crz-softText">{request.listingTitle}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-crz-softText">
                    {new Date(request.startsAt).toLocaleString()} → {new Date(request.endsAt).toLocaleString()}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-crz-softText">
                    {request.attendees} attendees · ${request.totalAmount}
                  </p>
                </div>
                <span className="rounded-sm border border-crz-outline/45 px-2 py-1 text-xs uppercase tracking-[0.16em] text-crz-softText">
                  pending
                </span>
              </div>

              <Textarea
                className="mt-4"
                placeholder="Reason (required only if rejecting)"
                value={declineReasons[request.id] ?? ''}
                onChange={(event) =>
                  setDeclineReasons((current) => ({
                    ...current,
                    [request.id]: event.target.value,
                  }))
                }
              />

              <div className="mt-3 flex flex-wrap gap-2">
                <Button
                  variant="secondary"
                  onClick={() => onAccept(request.id)}
                  disabled={responseMutation.isPending}
                >
                  Accept request
                </Button>
                <Button
                  variant="danger"
                  onClick={() => onReject(request.id)}
                  disabled={responseMutation.isPending}
                >
                  Reject request
                </Button>
              </div>
            </div>
          ))}

          {pendingRequests.length === 0 ? (
            <p className="rounded-md border border-dashed border-crz-outline/45 p-4 text-sm text-crz-softText">
              No pending requests right now.
            </p>
          ) : null}
        </div>
      </Card>
    </div>
  )
}

export default HostRequestsPage
