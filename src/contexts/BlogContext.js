import { createContext, useEffect, useState } from 'react';
import {addInfo} from "../contexts/BlogContext"

export const BlogContext = createContext();
const initialValues = { title: '', imageUrl: '', content: '' };

export const BlogContextProvider = (props) => {
  const [info, setInfo] = useState(initialValues);

  return (
    <BlogContext.Provider value={{info}}>{props.children}</BlogContext.Provider>
  );
};

export default BlogContextProvider;
