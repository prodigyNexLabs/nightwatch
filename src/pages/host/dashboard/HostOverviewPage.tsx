import { useQuery } from '@tanstack/react-query'
import { Activity, CircleCheckBig, ListChecks, TimerReset } from 'lucide-react'
import Card from '../../../components/ui/Card'
import { fetchHostIncomingRequests, fetchHostListings } from '../../../services/hostApi'

const HostOverviewPage = () => {
  const { data: listings = [] } = useQuery({
    queryKey: ['host-listings'],
    queryFn: fetchHostListings,
  })

  const { data: requests = [] } = useQuery({
    queryKey: ['host-requests'],
    queryFn: fetchHostIncomingRequests,
  })

  const pendingRequests = requests.filter((item) => item.status === 'pending').length
  const activeListings = listings.filter((item) => item.status === 'active').length

  const statCards = [
    {
      label: 'Active listings',
      value: activeListings,
      icon: CircleCheckBig,
      tone: 'text-crz-success bg-crz-success/10',
    },
    {
      label: 'Pending requests',
      value: pendingRequests,
      icon: ListChecks,
      tone: 'text-crz-primary bg-crz-primary/10',
    },
    {
      label: 'Total request queue',
      value: requests.length,
      icon: Activity,
      tone: 'text-crz-secondary bg-crz-secondary/10',
    },
    {
      label: 'Average action SLA',
      value: '18m',
      icon: TimerReset,
      tone: 'text-crz-warning bg-crz-warning/10',
    },
  ]

  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {statCards.map((item) => {
          const Icon = item.icon
          return (
            <Card key={item.label} className="rounded-lg p-5">
              <div className={`inline-flex h-10 w-10 items-center justify-center rounded-md ${item.tone}`}>
                <Icon size={18} />
              </div>
              <p className="mt-4 font-display text-3xl font-semibold text-crz-text">{item.value}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-crz-softText">{item.label}</p>
            </Card>
          )
        })}
      </section>

      <section className="grid gap-4 xl:grid-cols-2">
        <Card className="rounded-lg p-5">
          <h2 className="font-display text-xl font-semibold text-crz-text">Recent listing changes</h2>
          <div className="mt-4 space-y-3">
            {listings.slice(0, 4).map((listing) => (
              <div key={listing.id} className="rounded-md border border-crz-outline/35 bg-crz-surface p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-semibold text-crz-text">{listing.title}</p>
                  <span className="text-xs uppercase tracking-[0.16em] text-crz-softText">{listing.status}</span>
                </div>
                <p className="mt-1 text-sm text-crz-softText">{listing.city}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="rounded-lg p-5">
          <h2 className="font-display text-xl font-semibold text-crz-text">Pending requests</h2>
          <div className="mt-4 space-y-3">
            {requests
              .filter((request) => request.status === 'pending')
              .slice(0, 4)
              .map((request) => (
                <div key={request.id} className="rounded-md border border-crz-outline/35 bg-crz-surface p-4">
                  <p className="font-semibold text-crz-text">{request.guestName}</p>
                  <p className="mt-1 text-sm text-crz-softText">{request.listingTitle}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-crz-softText">
                    {new Date(request.startsAt).toLocaleString()}
                  </p>
                </div>
              ))}
          </div>
        </Card>
      </section>
    </div>
  )
}

export default HostOverviewPage
