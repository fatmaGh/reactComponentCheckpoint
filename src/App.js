import './App.css';
import ProfilePhoto from './profile/ProfilePhoto'
import FullName from './profile/FullName'
import Address from './profile/Address'
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import { MDBIcon, MDBContainer, MDBBtn } from 'mdbreact';
// import 'mdbreact/dist/css/mdb.css';



function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#!">Welcome to my profile</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Contact</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#!">Pricing</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#!">Download</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <ProfilePhoto />

      <FullName />

      <Address />

      <footer class="bg-light text-center text-white">
        <div class="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
          © 2021 Copyright
        </div>
      </footer>
    </div>
  );
}

export default App;
