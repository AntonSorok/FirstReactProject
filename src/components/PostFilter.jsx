import React from 'react'
import MyInput from './UI/input/MyInput'
import MySelect from './UI/select/MySelect'

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
        <MyInput value={filter.quary} onChange={e => setFilter({...filter, quary: e.target.value})} placeholder="Поиск..."></MyInput>
        <MySelect
        value={filter.quary}
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})} 
          defaultValue="Сортировка"
          options={[
              {value:'title', name: 'По названию'},
              {value:'body', name: 'По описанию'} 
          ]}
        />
      </div>
      )
}

export default PostFilter