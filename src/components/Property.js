import React from 'react'

export const Property = () => {
  return (
    <>
      <section className="Property" id="Property">
      <p className="Pp"> Your property with us and be Confident that Your Room will be Filled Out! </p>
      <div className="formBox">
          <h1 style={{color: "#F4511E", textAlign: "center", fontSize: 30}}>Add A New Property</h1>
      
          <form action="" className="form">
            <div className="Box">
              <label htmlFor="name">Name</label>
              <input type="text" placeholder="Enter Name" />
            </div>

            <div className="Box">
              <label htmlFor="name">Address</label>
              <input type="text" placeholder="Enter Address" />
            </div>

            <div className="Box">
              <label htmlFor="name">Unit Number</label>
              <input type="text" placeholder="Enter Unit" />
              </div>

              <div className="Box">
              <label htmlFor="name">City</label>
              <select name="" id="">
                <option value="Something">Select City</option>
                <option value="Something">Oakland</option>
                <option value="Something">San Jose</option>
                <option value="Something">Berkerly</option>
              </select>
              </div>

              <div className="Box">
              <label htmlFor="name">State</label>
              <select name="" id="">
                <option value="Something">Select State</option>
                <option value="Something">Texas</option>
                <option value="Something">Florida</option>
                <option value="Something">Ohio</option>
              </select>
              </div>

              <div className="Box">
              <label htmlFor="name">Room Type</label>
              <select name="" id="">
                <option value="Something">Select Room Type</option>
                <option value="Something">Bedroom</option>
                <option value="Something">Dining Room</option>
                <option value="Something">Attic</option>
              </select>
              </div>

              <div className="Box">
              <label htmlFor="name">Price</label>
              <input type="text" placeholder="Enter Price" />
              </div>


              <div className="Box">
              <label htmlFor="name">Apartment Type</label>
              <select name="" id="">
                <option value="Something">Apartment Type</option>
                <option value="Something">Studio</option>
                <option value="Something">Alcove Studio</option>
                <option value="Something">Loft</option>
            </select>
            </div>

              <div className="Dfullwidth">
                <p><label htmlFor="desc">Description</label></p>
              <textarea placeholder="Enter Description" rows="10"></textarea>
              </div>

              <label htmlFor="fullwidth">Upload Photos</label>

              <input type="file" className="fullwidth" id="fullwidth" name="UploadPhotos" rows= "10" placeholder="Drag your images here, or browse"/>
              <label className="fullwidthLabel" htmlFor="fullwidth">
                Drag your images here, 
                <span style={{color: "orangered"}}>or browse</span> 
                <span style={{color: "gray", fontWeight: "normal", display: "block"}}>Supported: JPG,JPEG, PNG</span>
              </label>


              <button className="submit">Add New Property</button>
      
          </form>
      </div>
    </section>
    </>
  )
}
