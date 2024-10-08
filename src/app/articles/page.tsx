import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { type Article, articles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import arch from "./arch-victory/page.mdx"

function Article({ article, route }: { article: Article, route: string }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/articles/${route}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'Things I think are important to share.',
}

export default async function ArticlesIndex() {
  return (
    <SimpleLayout
      title="Things I think are important to share."
      intro="Small snippets of information I want you to know about!"
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {articles.map((article, index) => (
            <Article key={index} article={article.article} route={article.route} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  )
}
