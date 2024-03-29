import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  MOBILE_SEARCH_BOX_SHOW,
  ON_SEARCH,
  SEARCH_BOX_CLOSE,
} from "../../redux/actionTypes/actionTypes";
import { onSearch } from "../../redux/actions/deviceAction";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import axios from "axios";
import logo from "../../assets/logo.svg";
import { api } from '../../urlConfig';

const Navbar = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.search);
  const { devices } = useSelector((state) => state.device);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDevices, setFilteredDevices] = useState([]);
  const [loginModal, setLoginModal] = useState(false);
  const [accountModal, setAccountModal] = useState(false);
  const [mobileSearchShow, setMobileSearchShow] = useState(false);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    // dispatch(onSearch(event.target.value));
  };

  useEffect(() => {
    // Update filtered devices when searchTerm changes
    setFilteredDevices(
      devices.filter(
        (device) =>
          device.deviceName.toLowerCase().includes(searchTerm.toLowerCase()) &&
          searchTerm.length >= 3
      )
    );
  }, [searchTerm, devices]);

  useEffect(() => { }, [filteredDevices]);
  const [user] = useAuthState(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const handleLogin = () => {
    signInWithGoogle()
      .then((user) => {
        if (user) {

          saveUserInfo(user);
        }
      })
      .catch((error) => {
        console.error("Error signing in:", error);
        // Handle error, show a message, etc.
      });
  };

  const saveUserInfo = async (user) => {
    const { uid, displayName, email } = user.user;
    setLoginModal(false);

    try {
      const response = await axios.post(
        `${api}/saveUserInfo`,
        {
          uid,
          displayName,
          email,
        }
      );


    } catch (error) {
      console.error("Error saving user information:", error);
      // Handle error, show a message, etc.
    }
  };

  const signOut = () => {
    auth.signOut();
    setAccountModal(false)
  };
  const clearInput = () => {
    setSearchTerm('');
  };
  return (
    <div className="w-full bg-[#9e9e9e] h-12 mx-auto fixed top-0 z-50 re">
      <div className="max-w-[1440px] mx-auto relative">
        <div className="w-full bg-[#616161] h-12 mx-auto flex justify-between sm:px-4 px-2 items-center">
          <Link
            onClick={() => dispatch({ type: SEARCH_BOX_CLOSE })}
            to="/"
            className="h-11 sm:max-w-36 lg:max-w-52 w-full max-w-[140px] flex justify-center items-center"
          >
            <img className='w-full' src={logo} alt="logo" srcset="" />
          </Link>

          <div className="bg-[#a5a5a5] lg:max-w-[300px] max-w-48 w-full py-1 h-[32px] hidden justify-center items-center md:flex mx-1">
            <input
              className="bg-transparent w-full h-full outline-none px-3 border-r-[1px] mr-2 text-white border-white placeholder:text-white"
              placeholder="Search"
              type="text"

              value={searchTerm}
              onChange={handleSearchChange}
            />

            {
              searchTerm ? <button className="w-8 flex" onClick={clearInput}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16"
                  height="16"
                  fill="rgba(255,255,255,1)"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg>
              </button> : <button className="w-8 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="rgba(255,255,255,1)"
                >
                  <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z" />
                </svg>
              </button>
            }

          </div>

          <div className="hidden md:flex items-center lg:gap-7 gap-3">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="rgba(255,255,255,1)"
              >
                <path d="M9.97308 18H14.0269C14.1589 16.7984 14.7721 15.8065 15.7676 14.7226C15.8797 14.6006 16.5988 13.8564 16.6841 13.7501C17.5318 12.6931 18 11.385 18 10C18 6.68629 15.3137 4 12 4C8.68629 4 6 6.68629 6 10C6 11.3843 6.46774 12.6917 7.31462 13.7484C7.40004 13.855 8.12081 14.6012 8.23154 14.7218C9.22766 15.8064 9.84103 16.7984 9.97308 18ZM14 20H10V21H14V20ZM5.75395 14.9992C4.65645 13.6297 4 11.8915 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 11.8925 19.3428 13.6315 18.2443 15.0014C17.624 15.7748 16 17 16 18.5V21C16 22.1046 15.1046 23 14 23H10C8.89543 23 8 22.1046 8 21V18.5C8 17 6.37458 15.7736 5.75395 14.9992ZM13 10.0048H15.5L11 16.0048V12.0048H8.5L13 6V10.0048Z"></path>
              </svg>
            </div>
            <div className="flex w-full justify-center items-center lg:gap-7 gap-3 border-r-[1px] border-l-[1px] px-3">
              <div className="w-full cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="rgba(255,255,255,1)"
                >
                  <path d="M19.6069 6.99482C19.5307 6.69695 19.3152 6.47221 19.0684 6.40288C18.6299 6.28062 16.501 6 12.001 6C7.50098 6 5.37252 6.28073 4.93225 6.40323C4.68776 6.47123 4.4723 6.69593 4.3951 6.99482C4.2863 7.41923 4.00098 9.19595 4.00098 12C4.00098 14.804 4.2863 16.5808 4.3954 17.0064C4.47126 17.3031 4.68676 17.5278 4.93251 17.5968C5.37252 17.7193 7.50098 18 12.001 18C16.501 18 18.6299 17.7194 19.0697 17.5968C19.3142 17.5288 19.5297 17.3041 19.6069 17.0052C19.7157 16.5808 20.001 14.8 20.001 12C20.001 9.2 19.7157 7.41923 19.6069 6.99482ZM21.5442 6.49818C22.001 8.28 22.001 12 22.001 12C22.001 12 22.001 15.72 21.5442 17.5018C21.2897 18.4873 20.547 19.2618 19.6056 19.5236C17.8971 20 12.001 20 12.001 20C12.001 20 6.10837 20 4.39637 19.5236C3.45146 19.2582 2.70879 18.4836 2.45774 17.5018C2.00098 15.72 2.00098 12 2.00098 12C2.00098 12 2.00098 8.28 2.45774 6.49818C2.71227 5.51273 3.45495 4.73818 4.39637 4.47636C6.10837 4 12.001 4 12.001 4C12.001 4 17.8971 4 19.6056 4.47636C20.5505 4.74182 21.2932 5.51636 21.5442 6.49818ZM10.001 15.5V8.5L16.001 12L10.001 15.5Z"></path>
                </svg>
              </div>
              <div className="w-full cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="rgba(255,255,255,1)"
                >
                  <path d="M16 8.24537V15.5C16 19.0899 13.0899 22 9.5 22C5.91015 22 3 19.0899 3 15.5C3 11.9101 5.91015 9 9.5 9C10.0163 9 10.5185 9.06019 11 9.17393V12.3368C10.5454 12.1208 10.0368 12 9.5 12C7.567 12 6 13.567 6 15.5C6 17.433 7.567 19 9.5 19C11.433 19 13 17.433 13 15.5V2H16C16 4.76142 18.2386 7 21 7V10C19.1081 10 17.3696 9.34328 16 8.24537Z"></path>
                </svg>
              </div>
              <div className="w-full cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="rgba(255,255,255,1)"
                >
                  <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47062 14 5.5 16 5.5H17.5V2.1401C17.1743 2.09685 15.943 2 14.6429 2C11.9284 2 10 3.65686 10 6.69971V9.5H7V13.5H10V22H14V13.5Z"></path>
                </svg>
              </div>
            </div>

            <div className="flex w-full justify-center items-center lg:gap-7 gap-3  px-3">
              {user ? (
                <>
                  {accountModal ? (
                    <div
                      className="w-[24px] h-6 cursor-pointer"
                      onClick={() => setAccountModal(!true)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#fff"
                      >
                        <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path>
                      </svg>
                    </div>
                  ) : (
                    <div
                      className="w-[24px] h-6 cursor-pointer"
                      onClick={() => setAccountModal(true)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#fff"
                      >
                        <path d="M3 4.99509C3 3.89323 3.89262 3 4.99509 3H19.0049C20.1068 3 21 3.89262 21 4.99509V19.0049C21 20.1068 20.1074 21 19.0049 21H4.99509C3.89323 21 3 20.1074 3 19.0049V4.99509ZM5 5V19H19V5H5ZM7.97216 18.1808C7.35347 17.9129 6.76719 17.5843 6.22083 17.2024C7.46773 15.2753 9.63602 14 12.1022 14C14.5015 14 16.6189 15.2071 17.8801 17.0472C17.3438 17.4436 16.7664 17.7877 16.1555 18.0718C15.2472 16.8166 13.77 16 12.1022 16C10.3865 16 8.87271 16.8641 7.97216 18.1808ZM12 13C10.067 13 8.5 11.433 8.5 9.5C8.5 7.567 10.067 6 12 6C13.933 6 15.5 7.567 15.5 9.5C15.5 11.433 13.933 13 12 13ZM12 11C12.8284 11 13.5 10.3284 13.5 9.5C13.5 8.67157 12.8284 8 12 8C11.1716 8 10.5 8.67157 10.5 9.5C10.5 10.3284 11.1716 11 12 11Z"></path>
                      </svg>
                    </div>
                  )}
                </>
              ) : (
                <>
                  {loginModal ? (
                    <div
                      className="w-[24px] h-6 cursor-pointer"
                      onClick={() => setLoginModal(!true)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#fff"
                      >
                        <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path>
                      </svg>
                    </div>
                  ) : (
                    <div
                      className="w-full cursor-pointer"
                      onClick={() => setLoginModal(true)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="rgba(255,255,255,1)"
                      >
                        <path d="M4 15H6V20H18V4H6V9H4V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V15ZM10 11V8L15 12L10 16V13H2V11H10Z"></path>
                      </svg>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
          <div className="items-center gap-2 md:hidden flex">

            <div
              onClick={() => dispatch({ type: MOBILE_SEARCH_BOX_SHOW })}
              className=""
            >
              {state.mobileSearch === false ? (
                <p className="text-white border-[1px] px-1 text-xs">
                  Phone Finder
                </p>
              ) : (
                <p className="text-white border-[1px] px-1 text-xs">Close</p>
              )}
            </div>
            <div className="w-5 h-5" onClick={() => setMobileSearchShow(!mobileSearchShow)}>

              {
                mobileSearchShow ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,1)"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg>
                  : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,1)"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>


              }

            </div>
            <div className="w-5 h-5" >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,1)"><path d="M10 7C10 10.866 13.134 14 17 14C18.9584 14 20.729 13.1957 21.9995 11.8995C22 11.933 22 11.9665 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C12.0335 2 12.067 2 12.1005 2.00049C10.8043 3.27098 10 5.04157 10 7ZM4 12C4 16.4183 7.58172 20 12 20C15.0583 20 17.7158 18.2839 19.062 15.7621C18.3945 15.9187 17.7035 16 17 16C12.0294 16 8 11.9706 8 7C8 6.29648 8.08133 5.60547 8.2379 4.938C5.71611 6.28423 4 8.9417 4 12Z"></path></svg>
            </div>
            {/* <div className="w-5 h-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="rgba(255,255,255,1)"
              >
                <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
              </svg>
            </div> */}
            <div className="w-5 h-5">
              {user ? (
                <>
                  {accountModal ? (
                    <div
                      className="w-5 h-5 cursor-pointer"
                      onClick={() => setAccountModal(!true)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#fff"
                      >
                        <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path>
                      </svg>
                    </div>
                  ) : (
                    <div
                      className="w-5 h-5 cursor-pointer"
                      onClick={() => setAccountModal(true)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#fff"
                      >
                        <path d="M3 4.99509C3 3.89323 3.89262 3 4.99509 3H19.0049C20.1068 3 21 3.89262 21 4.99509V19.0049C21 20.1068 20.1074 21 19.0049 21H4.99509C3.89323 21 3 20.1074 3 19.0049V4.99509ZM5 5V19H19V5H5ZM7.97216 18.1808C7.35347 17.9129 6.76719 17.5843 6.22083 17.2024C7.46773 15.2753 9.63602 14 12.1022 14C14.5015 14 16.6189 15.2071 17.8801 17.0472C17.3438 17.4436 16.7664 17.7877 16.1555 18.0718C15.2472 16.8166 13.77 16 12.1022 16C10.3865 16 8.87271 16.8641 7.97216 18.1808ZM12 13C10.067 13 8.5 11.433 8.5 9.5C8.5 7.567 10.067 6 12 6C13.933 6 15.5 7.567 15.5 9.5C15.5 11.433 13.933 13 12 13ZM12 11C12.8284 11 13.5 10.3284 13.5 9.5C13.5 8.67157 12.8284 8 12 8C11.1716 8 10.5 8.67157 10.5 9.5C10.5 10.3284 11.1716 11 12 11Z"></path>
                      </svg>
                    </div>
                  )}
                </>
              ) : (
                <>
                  {loginModal ? (
                    <div
                      className="w-5 h-5 cursor-pointer"
                      onClick={() => setLoginModal(!true)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#fff"
                      >
                        <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path>
                      </svg>
                    </div>
                  ) : (
                    <div
                      className="w-5 h-5  cursor-pointer"
                      onClick={() => setLoginModal(true)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="rgba(255,255,255,1)"
                      >
                        <path d="M4 15H6V20H18V4H6V9H4V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V15ZM10 11V8L15 12L10 16V13H2V11H10Z"></path>
                      </svg>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
        {filteredDevices.length > 0 && (
          <>
            <div className="absolute sm:w-[300px] w-full z-10 sm:top-[48px] top-[80px] sm:right-[42.1%] right-0 flex flex-col">
              {filteredDevices.slice(0, 3).map((device, i) => (
                <Link
                  key={i}
                  to={`/${device.brand.toLowerCase()}/${device._id}`}
                  className="flex justify-start items-center gap-2 bg-slate-500 border-b-[1px] border-t-[1px] py-[1px] px-2"
                >
                  <div className="max-w-[28px] w-full">
                    <img
                      className="w-full h-[36px] object-contain"
                      src={device.banner_img}
                      alt=""
                    />
                  </div>
                  <p className="text-white font-inter">{device.deviceName}</p>
                </Link>
              ))}
            </div>
          </>
        )}
        {loginModal && (
          <>
            <div
              onClick={() => handleLogin()}
              className="max-w-[250px] flex gap-2 justify-center items-center w-full h-[50px] bg-slate-500 absolute z-10 right-[0px] top-[48px] cursor-pointer"
            >
              <div className="w-[30px] h-[30px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#fff"
                >
                  <path d="M3.06364 7.50914C4.70909 4.24092 8.09084 2 12 2C14.6954 2 16.959 2.99095 18.6909 4.60455L15.8227 7.47274C14.7864 6.48185 13.4681 5.97727 12 5.97727C9.39542 5.97727 7.19084 7.73637 6.40455 10.1C6.2045 10.7 6.09086 11.3409 6.09086 12C6.09086 12.6591 6.2045 13.3 6.40455 13.9C7.19084 16.2636 9.39542 18.0227 12 18.0227C13.3454 18.0227 14.4909 17.6682 15.3864 17.0682C16.4454 16.3591 17.15 15.3 17.3818 14.05H12V10.1818H21.4181C21.5364 10.8363 21.6 11.5182 21.6 12.2273C21.6 15.2727 20.5091 17.8363 18.6181 19.5773C16.9636 21.1046 14.7 22 12 22C8.09084 22 4.70909 19.7591 3.06364 16.4909C2.38638 15.1409 2 13.6136 2 12C2 10.3864 2.38638 8.85911 3.06364 7.50914Z"></path>
                </svg>
              </div>{" "}
              <p className="text-white">Continue with Google</p>
            </div>
          </>
        )}
        {accountModal && (
          <>
            <div className="max-w-[250px] flex gap-2 justify-center items-center w-full  absolute z-10 right-[0px] top-[48px] cursor-pointer">
              <div onClick={() => signOut()} className="h-[50px] flex justify-center items-center w-full bg-slate-500 border-b-2 border-white cursor-pointer">
                <p className="text-white">LogOut</p>
              </div>
            </div>
          </>
        )}
        {
          mobileSearchShow &&
          <div className='h-[32px] bg-gray-300 w-full absolute top-[48px]'>
            <div className='flex items-center'>
              <input className='w-full h-[32px] bg-gray-300 text-white outline-none px-1' placeholder="Search"
                type="text"

                value={searchTerm}
                onChange={handleSearchChange} />

              {
                searchTerm && <div className="w-5 h-5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(0,0,0,1)"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg>
                </div>
              }

            </div>
          </div>
        }
      </div>




    </div>
  );
};

export default Navbar;
