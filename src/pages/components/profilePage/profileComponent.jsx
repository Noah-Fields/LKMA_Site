import image from "./tempImage.jpg";

export const ProfileComponent = (props) => {
  return (
    <div id='student' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Profile</h2>
        </div>
        <div className='row'>
          <div className='row'>
            <img src={image} />
          </div>
          <div className="column">
            <h1>First Name</h1>
            <h1>Last Name</h1>
          </div>
          <div className="column">
            <h1>Email Here</h1>
            {/*If Phone # is in DB, display, else display Add Phone Button.*/}
            <h1>Phone # Here</h1>
            <button>Add Phone</button>
          </div>
        </div>
        <div className='row'>
          <div className="column">
            <button>Change Email</button>
          </div>
          <div className="column">
            <button>Change Password</button>
          </div>
        </div>
      </div>
    </div>
  )
}
