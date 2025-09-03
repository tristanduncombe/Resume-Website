"use client"
import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import logoBoeing from '@/images/logos/boeing.svg'
import logoScorsa from '@/images/logos/scorsa.png'
import { IconBriefcase, IconMail } from "@tabler/icons-react";

interface Role {
    company: string
    title: string
    logo: ImageProps['src']
    start: string | { label: string; dateTime: string }
    end: string | { label: string; dateTime: string }
  }
  
function Role({ role }: { role: Role }) {
    let startLabel =
        typeof role.start === 'string' ? role.start : role.start.label
    let startDate =
        typeof role.start === 'string' ? role.start : role.start.dateTime

    let endLabel = typeof role.end === 'string' ? role.end : role.end.label
    let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

    return (
        <li className="flex gap-4">
        <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:ring-0">
            {role.company === 'Scorsa' ? (
              <Image src={role.logo} alt="" className="h-10 w-10 object-cover rounded-full" unoptimized />
            ) : (
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            )}
        </div>
        <dl className="flex flex-auto flex-wrap gap-x-2">
            <dt className="sr-only">Company</dt>
            <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
            {role.company}
            </dd>
            <dt className="sr-only">Role</dt>
            <dd className="text-xs text-zinc-500 dark:text-zinc-400">
            {role.title}
            </dd>
            <dt className="sr-only">Date</dt>
            <dd
            className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
            aria-label={`${startLabel} until ${endLabel}`}
            >
            <time dateTime={startDate}>{startLabel}</time>{' '}
            <span aria-hidden="true">—</span>{' '}
            <time dateTime={endDate}>{endLabel}</time>
            </dd>
        </dl>
        </li>
    )
}

export default function Resume() {
    let resume: Array<Role> = [
      {
        company: 'Scorsa',
        title: 'Software Engineering Consultant',
        logo: logoScorsa,
        start: '2024',
        end: {
          label: 'Present',
          dateTime: new Date().getFullYear().toString(),
        },
      },
      {
        company: 'Boeing',
        title: 'Undergraduate Software Engineer',
        logo: logoBoeing,
        start: '2022',
        end: {
          label: 'Present',
          dateTime: new Date().getFullYear().toString(),
        },
      },
    ]
  
    return (
      <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          <IconBriefcase className="h-6 w-6 flex-none" />
          <span className="ml-3">Work</span>
        </h2>
        <ol className="mt-6 space-y-4">
          {resume.map((role, roleIndex) => (
            <Role key={roleIndex} role={role} />
          ))}
        </ol>
        <Button variant="secondary" className="group mt-6 w-full" onClick={() => window.location.href = 'mailto:tristan@tristanduncombe.com'}>
          Reach out for my Resume!
          <IconMail className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
        </Button>
      </div>
    )
  }