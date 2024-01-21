import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import commentServices from "../services/commentServices";
import Loading from "./Loading";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Comment = (props) => {
  const isAuthenticated = useSelector((state) => state.auth?.isAuthenticated);
  const navigate = useNavigate();
  const userId = useSelector((state) => state.auth?.user?._id);
  //const[close,setClose]=useState(props.close);
  const [comment, setComment] = useState("");
  const [showComment, setShowComment] = useState("");

  const fetchComment = async () => {
    const allcomments = await axios?.get(
      `/api/photo/getComment/${props.postId}`
    );
    setShowComment(allcomments);
  };

  const handleComment = async (event) => {
    if (!isAuthenticated) {
      //console.log("not user")
      navigate("/login");
      return;
    } else {
      try {
        event.preventDefault();
        const payload = {
          userId,
          postId: props.postId,
          comment,
        };
        const response = await commentServices.create(payload);
        toast.success(response.data.msg);
        setComment("");
        fetchComment();
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    fetchComment();
  }, []);
  // console.log(showComment.data);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center ">
        <div className="px-10">
          <div className="bg-white max-w-xl rounded-2xl px-10 py-8 shadow-lg hover:shadow-2xl transition duration-500">
            <div className="flex justify-between">
            <div className="w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center font-bold text-white">
              flashes
            </div>
            <button
                className="p-6 bg-red-300 rounded-full h-4 w-4 flex items-center justify-center text-2xl text-white shadow-lg cursor-pointer"
                onClick={() => {
                  props.setClose(!props.close);
                }}
              >
                X
              </button>
              </div>
            <div className="mt-4">
              <h1>{props.like} likes</h1>
              <h1 className="text-lg text-gray-700 font-semibold hover:underline">
                Comments
              </h1>
              <div className="  h-80 overflow-y-auto">
                {showComment.data !== undefined &&
                  showComment.data.data.length > 0 && (
                    <>
                      {showComment.data.data.map((comments) => (
                        <div>
                          <div class="flex items-center space-x-2 mx-2 my-5">
                            <div className="flex flex-shrink-0 self-start cursor-pointer">
                              <img
                                src="https://images.unsplash.com/photo-1551122089-4e3e72477432?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cnVieXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                alt=""
                                className="h-8 w-8 object-fill rounded-full"
                              />
                            </div>

                            <div className="">
                              <div className="bg-gray-100 w-auto rounded-xl px-5 pb-3">
                                <div className="font-semibold">
                                  <a href="#" class="hover:underline text-xl">
                                    <small>
                                      {comments.userId.firstName}{" "}
                                      {comments.userId.lastName}
                                    </small>
                                  </a>
                                </div>
                                <div className="text-lg">
                                  {comments.comment}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </>
                  )}
              </div>

              <div className="flex justify-around items-center gap-2">
                <div className="mt-4 flex items-center space-x-4 py-6">
                  <input
                    type="text"
                    placeholder="type your comments "
                    className="rounded-3xl border border-black px-5 py-2"
                    value={comment}
                    onChange={(event) => {
                      setComment(event.target.value);
                    }}
                  />
                </div>
                <div
                  className="p-6 bg-yellow-400 rounded-full h-4 w-4 flex items-center justify-center text-2xl text-white mt-4 shadow-lg cursor-pointer"
                  onClick={handleComment}
                >
                  +
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comment;
