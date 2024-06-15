import  { useState } from "react";
import { Link, Outlet, useLoaderData, useNavigation } from "react-router-dom";
import Loader from "../../Loader/Loader";
import { MdBookmarkAdd } from "react-icons/md";
import { saveBlog } from "../../../utils";
const Blog = () => {

  const [tabIndex, setIndex] = useState(0)
  const navigation = useNavigation()
  const blog = useLoaderData();

  const {
    comments_count,
    title,
    reading_time_minutes,
    public_reactions_count,
    published_at,
    tags

  } = blog;

  const handleBookMark = (blog) => {
    console.log(blog);
    saveBlog(blog)
  }

  if(navigation.state === 'loading') return <Loader></Loader>
  return (
    <div className="max-w-3xl px-6 py-16 mx-auto space-y-12">
      <article className="space-y-8 dark:bg-gray-00 dark:text-gray-900">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">
            {title}
          </h1>
          <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-600">
            <p className="text-sm">
              {reading_time_minutes} min read •{" "}
              {new Date(published_at).toLocaleDateString()}
            </p>

            <p className="flex-shrink-0 mt-3 text-sm md:mt-0">
              {comments_count} Comments • {public_reactions_count} Views
            </p>
          </div>

            {/* Tabs */}

          <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-00 dark:text-gray-800">
            <Link
            to=''
            onClick={()=>setIndex(0)}
              rel="noopener noreferrer"
              href="#"
              className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0' : 'boder-b'} rounded-t-lg dark:border-gray-400 dark:text-gray-0`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
              <span>Content</span>
            </Link>
            <Link
            onClick={()=>setIndex(1)}
            to={`author`}
              rel="noopener noreferrer"
              href="#"
              className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0' : 'boder-b'} rounded-t-lg dark:border-gray-400 dark:text-gray-0`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
              <span>Author</span>
            </Link>
             {/* bookmark button */}
          <div onClick={()=> handleBookMark(blog)} className="bg-primary rounded-full p-4 ml-5 hover:bg-opacity-30 bg-opacity-20 cursor-pointer hover:scale-105 overflow-hidden ">
            <MdBookmarkAdd size={20} className="text-secondary"></MdBookmarkAdd>
          </div>
          </div>
        </div>
        <Outlet></Outlet>
      </article>
      <div>
        
        <div className="space-y-2">
          <h4 className="text-lg font-semibold">Related posts</h4>
          <ul className="ml-4 space-y-1 list-disc">
            <li>
              <a rel="noopener noreferrer" href="#" className="hover:underline">
                Nunc id magna mollis
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="#" className="hover:underline">
                Duis molestie, neque eget pretium lobortis
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="#" className="hover:underline">
                Mauris nec urna volutpat, aliquam lectus sit amet
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Blog;
