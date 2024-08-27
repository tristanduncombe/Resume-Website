import glob from 'fast-glob'

export interface Article {
  title: string
  description: string
  author: string
  date: string
}

export const articles = [
  {article: {
    author: 'Tristan Duncombe',
    date: '2024-04-03',
    title: 'Celebrating Victory at the 2024 EAIT Hackathon',
    description:
      'Our 8 hour Journey to Victory.',
  }, route: "arch-victory"}]