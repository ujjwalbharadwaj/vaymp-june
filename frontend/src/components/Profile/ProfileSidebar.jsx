import React from "react";
import { AiOutlineLogin, AiOutlineMessage } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { HiOutlineReceiptRefund, HiOutlineShoppingBag } from "react-icons/hi";
import {
  MdOutlineAdminPanelSettings,
  MdOutlinePassword,
  MdOutlineTrackChanges,
} from "react-icons/md";
import { TbAddressBook } from "react-icons/tb";
import { RxPerson } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const ProfileSidebar = ({ setActive, active }) => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const logoutHandler = () => {
    axios
      .get(`${server}/user/logout`, { withCredentials: true })
      .then((res) => {
        toast.success(res.data.message);
        window.location.reload(true);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };

  return (
    <div className="sticky top-40  w-full bg-white shadow-sm rounded-[10px] p-10 pt-8">
      <div
        className="flex flex-col sm:flex-row items-center cursor-pointer w-full mb-6"
        onClick={() => setActive(1)}
      >
        <RxPerson size={20} color={active === 1 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 1 ? "text-[red]" : ""
          } hidden sm:block`}
        >
          Profile
        </span>
        <span
          className={`text-center text-sm mt-1 sm:hidden ${
            active === 1 ? "text-[red]" : ""
          }`}
        >
          Profile
        </span>
      </div>
      <div
        className="flex flex-col sm:flex-row items-center cursor-pointer w-full mb-6"
        onClick={() => setActive(2)}
      >
        <HiOutlineShoppingBag size={20} color={active === 2 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 2 ? "text-[red]" : ""
          } hidden sm:block`}
        >
          Orders
        </span>
        <span
          className={`text-center text-sm mt-1 sm:hidden ${
            active === 2 ? "text-[red]" : ""
          }`}
        >
          Orders
        </span>
      </div>
      <div
        className="flex flex-col sm:flex-row items-center cursor-pointer w-full mb-6"
        onClick={() => setActive(3)}
      >
        <HiOutlineReceiptRefund size={20} color={active === 3 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 3 ? "text-[red]" : ""
          } hidden sm:block`}
        >
          Refunds
        </span>
        <span
          className={`text-center text-sm mt-1 sm:hidden ${
            active === 3 ? "text-[red]" : ""
          }`}
        >
          Refunds
        </span>
      </div>
      <div
        className="flex flex-col sm:flex-row items-center cursor-pointer w-full mb-6"
        onClick={() => setActive(4) || navigate("/inbox")}
      >
        <AiOutlineMessage size={20} color={active === 4 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 4 ? "text-[red]" : ""
          } hidden sm:block`}
        >
          Inbox
        </span>
        <span
          className={`text-center text-sm mt-1 sm:hidden ${
            active === 4 ? "text-[red]" : ""
          }`}
        >
          Inbox
        </span>
      </div>
      <div
        className="flex flex-col sm:flex-row items-center cursor-pointer w-full mb-6"
        onClick={() => setActive(5)}
      >
        <MdOutlineTrackChanges size={20} color={active === 5 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 5 ? "text-[red]" : ""
          } hidden sm:block`}
        >
          Track Order
        </span>
        <span
          className={`text-center text-sm mt-1 sm:hidden ${
            active === 5 ? "text-[red]" : ""
          }`}
        >
          Track Order
        </span>
      </div>
      <div
        className="flex flex-col sm:flex-row items-center cursor-pointer w-full mb-6"
        onClick={() => setActive(6)}
      >
        <RiLockPasswordLine size={20} color={active === 6 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 6 ? "text-[red]" : ""
          } hidden sm:block`}
        >
          Change Password
        </span>
        <span
          className={`text-center text-sm mt-1 sm:hidden ${
            active === 6 ? "text-[red]" : ""
          }`}
        >
          Change Password
        </span>
      </div>
      <div
        className="flex flex-col sm:flex-row items-center cursor-pointer w-full mb-6"
        onClick={() => setActive(7)}
      >
        <TbAddressBook size={20} color={active === 7 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 7 ? "text-[red]" : ""
          } hidden sm:block`}
        >
          Address
        </span>
        <span
          className={`text-center text-sm mt-1 sm:hidden ${
            active === 7 ? "text-[red]" : ""
          }`}
        >
          Address
        </span>
      </div>
      {user && user?.role === "Admin" && (
        <Link to="/admin/dashboard">
          <div
            className="flex flex-col sm:flex-row items-center cursor-pointer w-full mb-6"
            onClick={() => setActive(8)}
          >
            <MdOutlineAdminPanelSettings
              size={20}
              color={active === 8 ? "red" : ""}
            />
            <span
              className={`pl-3 ${
                active === 8 ? "text-[red]" : ""
              } hidden sm:block`}
            >
              Admin Dashboard
            </span>
            <span
              className={`text-center text-sm mt-1 sm:hidden ${
                active === 8 ? "text-[red]" : ""
              }`}
            >
              Admin Dashboard
            </span>
          </div>
        </Link>
      )}
      <div
        className="flex flex-col sm:flex-row items-center cursor-pointer w-full mb-6"
        onClick={logoutHandler}
      >
        <AiOutlineLogin size={20} color={active === 9 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 9 ? "text-[red]" : ""
          } hidden sm:block`}
        >
          Log out
        </span>
        <span
          className={`text-center text-sm mt-1 sm:hidden ${
            active === 9 ? "text-[red]" : ""
          }`}
        >
          Log out
        </span>
      </div>
    </div>
  );
};

export default ProfileSidebar;