import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import useFresh from '../../hook/useFresh'
import AdminBlogPost from '../../components/admin/AdminBlogPost'
import NoPost from '../../components/NoPost'

export default function AdminApp (): JSX.Element {
  const { blogs, getBlogsData } = useFresh()

  useEffect(() => {
    getBlogsData()
  }, [])

  return (
    <>
      <motion.article
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {blogs.length > 0 && (
          <h2 className="text-4xl text-center font-bold mt-10">
            Blog de la página de{' '}
            <span className="text-[#FF0D48]">Fresquilla</span>
          </h2>
        )}
      </motion.article>
      <article className="flex mt-10">
        <AnimatePresence>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {blogs.length > 0 &&
              blogs.map((blog, index) => (
                <AdminBlogPost
                  key={blog._id}
                  blog={blog}
                  index={index}
                />
              ))
            }
          </section>
          {blogs.length === 0 && (
            <section className="mx-auto mt-20">
              <NoPost />
            </section>
          )}
        </AnimatePresence>
      </article>
    </>
  )
}
