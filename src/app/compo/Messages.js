
let Messages = async () => {

  return(
          <>
          
          
          <button className="messages-close">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-x-circle"
          >
            <circle cx={12} cy={12} r={10} />
            <line x1={15} y1={9} x2={9} y2={15} />
            <line x1={9} y1={9} x2={15} y2={15} />
          </svg>
        </button>
        <div className="projects-section-header">
          <p>Client Messages</p>
        </div>
        <div className="messages">
          <div className="message-box">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
              alt="profile image"
            />
            <div className="message-content">
              <div className="message-header">
                <div className="name">Stephanie</div>
                <div className="star-checkbox">
                  <input type="checkbox" id="star-1" />
                  <label htmlFor="star-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-star"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </label>
                </div>
              </div>
              <p className="message-line">
                I got your first assignment. It was quite good. 🥳 We can
                continue with the next assignment.
              </p>
              <p className="message-line time">Dec, 12</p>
            </div>
          </div>
          <div className="message-box">
            <img
              src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
              alt="profile image"
            />
            <div className="message-content">
              <div className="message-header">
                <div className="name">Mark</div>
                <div className="star-checkbox">
                  <input type="checkbox" id="star-2" />
                  <label htmlFor="star-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-star"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </label>
                </div>
              </div>
              <p className="message-line">
                Hey, can tell me about progress of project? I'm waiting for your
                response.
              </p>
              <p className="message-line time">Dec, 12</p>
            </div>
          </div>
          <div className="message-box">
            <img
              src="https://images.unsplash.com/photo-1543965170-4c01a586684e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDZ8fG1hbnxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
              alt="profile image"
            />
            <div className="message-content">
              <div className="message-header">
                <div className="name">David</div>
                <div className="star-checkbox">
                  <input type="checkbox" id="star-3" />
                  <label htmlFor="star-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-star"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </label>
                </div>
              </div>
              <p className="message-line">
                Awesome! 🤩 I like it. We can schedule a meeting for the next
                one.
              </p>
              <p className="message-line time">Dec, 12</p>
            </div>
          </div>
          <div className="message-box">
            <img
              src="https://images.unsplash.com/photo-1533993192821-2cce3a8267d1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWFuJTIwbW9kZXJufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
              alt="profile image"
            />
            <div className="message-content">
              <div className="message-header">
                <div className="name">Jessica</div>
                <div className="star-checkbox">
                  <input type="checkbox" id="star-4" />
                  <label htmlFor="star-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-star"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </label>
                </div>
              </div>
              <p className="message-line">
                I am really impressed! Can't wait to see the final result.
              </p>
              <p className="message-line time">Dec, 11</p>
            </div>
          </div>
        </div>
          

          </>

    )

}

export default Messages;