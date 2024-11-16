import "./login.css";

export function Login() {
  return (
    <div className="container-fluid">
      <h2>Bootstrap in React</h2>
      <button
        className="btn btn-primary"
        data-bs-target="#login"
        data-bs-toggle="modal"
      >
        Login
      </button>
      <div className="modal fade" id="login">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h2>User Login</h2>
              <button
                className="btn btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <dl>
                <dt>UserName</dt>
                <dd>
                  <input type="text" className="form-control"></input>
                </dd>
                <dt>Password</dt>
                <dd>
                  <input type="password" className="form-control"></input>
                </dd>
              </dl>
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary">Login</button>
              <button data-bs-dismiss="modal" className="btn btn-warning">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
