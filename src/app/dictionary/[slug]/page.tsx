import { topics } from '@/data/topics';
import { notFound } from 'next/navigation';
import TopicView from '@/components/TopicView';

type Props = {
    params: Promise<{ slug: string }>;
    
  };

export default async function TopicPage({params}: Props) {
    const {slug} = await params;
    const topic = topics.find((t) => t.slug === slug);

    if(!topic) return notFound();

    return <TopicView topic={topic} />;
}