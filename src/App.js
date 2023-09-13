import React, { useMemo, useState}  from "react";
import PostList from "./components/PostList";

import './styles/App.css'
import PostForm from "./components/UI/PostForm";
import PostFilter from './components/PostFilter'
import MyModal from "./components/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'рр', body: 'ппп'},
    {id: 2, title: 'ыы', body: 'аа'},
    {id: 3, title: 'ппп', body: 'ййй'}

  ])

  
const [filter, setFilter] = useState({sort:'', quary: ''})
const [modal, setModal] = useState(false)

  const sortedPosts = useMemo(() => {
    console.log('check')

    if(filter.sort) { 
      return [...posts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts
  }, [filter.sort, posts]) 
  
  const sortedAndSearchedPosts = useMemo( () => {
return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.quary.toLowerCase()))
  }, [filter.quary, sortedPosts])
 

  const createPost = (newPost) => { 
    setPosts([...posts, newPost])
    setModal(false)
  }
  const removePost=(post) => {
    setPosts(posts.filter(p=> p.id !== post.id))
  }


//Поиск фильтрация 1.12.11 



  return (
    <div className="App">
      <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>Создать пост</MyButton>
      <MyModal visible={modal} setVisible={setModal}> 
        <PostForm create={createPost}/> 
      </MyModal>
      <hr style={{margin: '15px 0px'}}/>
      <PostFilter filter={filter} setFilter={setFilter}/>
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Список постов'/> 
    </div>
  );
}

export default App;
