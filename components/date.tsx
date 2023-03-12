import { parseISO, format } from 'date-fns'

export default function Date({ dateString }: { dateString: string }) {
  try {
    const date = parseISO(dateString)
    return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
  } catch (error) {
    console.error(error)
    return null
  }
}


// import { parseISO, format } from 'date-fns'

// export default function Date({ dateString }) {
//   const date = parseISO(dateString)
//   return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
// }