import React from 'react'
import './Add.scss';

const Add = () => {
  return (
    <div className='add'>
      <div className="container">
        <h1>Add New Gig</h1>
        <div className="section">
          <div className="left">
            <label htmlFor="Title">Title</label>
            <input type="text" placeholder='e.g . I will do something i am really good' />
            <label htmlFor="Category">Category</label>
            <select name="cats" id="cats">
              <option value="design">Design</option>
              <option value="web development">Web Development</option>
              <option value="animation">animation</option>
              <option value="music">Music</option>
            </select>
            <label htmlFor="Cover-Image">Cover Image</label>
            <input type="file"  />
            <label htmlFor="Upload-Images">Upload Images</label>
            <input type="file" multiple />
            <label htmlFor="Description">Description</label>
            <textarea name="desc"  id="" cols="30" rows="16" placeholder='Brief descriptiom to introduce your services to customer'> </textarea>
            <button>Create</button>
          </div>
          <div className="right">
            <label htmlFor="">Service Title</label>
            <input type="text" placeholder='e.g . one-page web design' />
            <label htmlFor="">Short Description</label>
            <textarea name="" id="" placeholder='Short description of your service' cols="30" rows="10"></textarea>
            <label htmlFor="">Delivery Time e.g 3 days</label>
            <input type="numbers" min={1} name="" id="" />
            <label htmlFor="">Revision Number</label>
            <input type="numbers"  min={1}/>
            <label htmlFor="">Add Features</label>
            <input type="text" name="" id="" placeholder='e.g . page design' />
            <input type="file" name="" id="" placeholder='e.g . file uploading' />
            <input type="text" name="" id="" placeholder='e.g . setting domain'/>
            <input type="text" name="" id="" placeholder='e.g . hosting'/>
            <input type="numbers" min={1} name="" id="" />
            <label htmlFor="">Price</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Add