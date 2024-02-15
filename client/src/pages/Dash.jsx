import React, {useState} from 'react'
import DashNav from '../components/DashNav'
import Articles from '../components/Art'
import NewsletterDash from '../components/NewsletterDash'

const Dash = () => {
  const [page, setPage] = useState("articles")
  return (
    <div>
      <DashNav setPage={setPage}/>
      {page === "articles" && <Articles/>}
      {page === "newsletter" && <NewsletterDash/>}
    </div>
  )
}

export default Dash