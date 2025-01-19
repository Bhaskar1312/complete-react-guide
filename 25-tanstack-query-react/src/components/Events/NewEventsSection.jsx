import { useQuery } from '@tanstack/react-query'
import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import EventItem from './EventItem.jsx';
import { fetchEvents } from '../../util/http.js';

export default function NewEventsSection() {
 
  const {data, isPending, isError, error } = useQuery({
    queryFn: fetchEvents, // promise fn, send http req is done by us using fetch/axios
    queryKey: [''] , // ['some-key', {}, []] used by tanstack-react-query to cache the data
    staleTime: 5000, //1000 * 60 * 5, // 5 min, if data is older than this, then fetch new data
    // gcTime: 1000, //1000 * 60 * 60 * 24, // 24 hours, if data is older than this, then remove from cache, default is 5min
  });
  // data is returned by custom function from fetchEvents
  // isPending(instead of isLoading), isError(our code fetchEvents must throw error) by useQuery


  let content;

  if (isPending) {
    content = <LoadingIndicator />;
  }

  if (isError) {
    content = (
      <ErrorBlock title="An error occurred" message={error.info?.message || 'Failed to fetch events'} />
    );
  }

  if (data) {
    content = (
      <ul className="events-list">
        {data.map((event) => (
          <li key={event.id}>
            <EventItem event={event} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section className="content-section" id="new-events-section">
      <header>
        <h2>Recently added events</h2>
      </header>
      {content}
    </section>
  );
}
