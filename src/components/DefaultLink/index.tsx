import React from 'react'
import Link from 'next/link'

interface DefaultLinkProps {
  href: string
  title: string
}

const DefaultLink: React.FC<DefaultLinkProps> = ({
  href,
  title,
}) => {
  return (
    <Link href={href}>
      <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
        {title}
      </a>
    </Link>
  )
}

export default DefaultLink
