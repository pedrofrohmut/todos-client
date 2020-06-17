import Tasks from "../components/Tasks"
import Todos from "../components/Todos"

import Head from "next/head"

const IndexPage = () => (
  <>
    <Head>
      <title>Todo List</title>
    </Head>
    <h1 className="title">Stuff i need to do</h1>
    <Tasks />
    <Todos />
  </>
)

export default IndexPage
