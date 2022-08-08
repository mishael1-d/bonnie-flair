import React, { useState } from "react";

function Dropdown() {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleClick = () => {
        setShowDropdown(!showDropdown);
    }
    return(
        <div className="flex justify-center">
            <div className="dropdown relative">
                <button
                onClick={handleClick}
                    className="
                    ml-5 
                    border
                    px-4
                    py-3
                    bg-white
                    font-medium
                    text-lg
                    rounded-lg
                    shadow-sm
                    hover:bg-[#051D4C] hover:text-white
                    focus:shadow-md focus:outline-none focus:ring-0
                    active:shadow-md
                    transition
                    duration-150
                    ease-in-out
                    flex
                    items-center
                    whitespace-nowrap
                    "
                    type="button"
                    aria-expanded="false"
                >
                    <svg
                    className="w-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                    />
                    </svg>
                    Account
                    <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="caret-down"
                    className="w-4 ml-2"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    >
                    <path
                        fill="currentColor"
                        d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                    ></path>
                    </svg>
                </button>
                {showDropdown && 
                    (
                        <ul
                    className="
                    min-w-max
                    absolute
                    bg-white
                    text-lg
                    z-50
                    float-left
                    py-2
                    list-none
                    text-left
                    rounded-lg
                    shadow-lg
                    mt-1
                    m-0
                    bg-clip-padding
                    border-none
                    "
                    aria-labelledby="dropdownMenuButton1"
                >
                    <li className="p-6 border-b">
                    <button
                        className="
                        rounded-lg
                        font-semibold
                        text-lg
                        text-white
                        uppercase
                        py-2
                        px-4
                        block
                        w-full
                        whitespace-nowrap
                        bg-[#051D4C]
                        "
                        >Sign In</button>
                    </li>
                    <li>
                    <p
                        className="
                        flex
                        items-center
                        text-lg
                        py-2
                        px-4
                        font-semibold
                        w-full
                        whitespace-nowrap
                        bg-transparent
                        hover:bg-gray-100
                        "
                        >
                        <svg
                            className="w-5 mr-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                            fillRule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clipRule="evenodd"
                        />
                        </svg> 
                        My Account</p
                    >
                    </li>
                    <li>
                    <p
                        className="
                        flex
                        items-center
                        text-lg
                        py-2
                        px-4
                        font-semibold
                        w-full
                        whitespace-nowrap
                        bg-transparent
                        hover:bg-gray-100
                        "
                        >
                        <svg className="w-5 mr-2" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.8779 9.01367L22.4072 1.60156C22.0898 0.644531 21.1963 0 20.1855 0H13.2812V9.375H24.9365C24.917 9.25293 24.917 9.13086 24.8779 9.01367ZM11.7188 0H4.81445C3.80371 0 2.91016 0.644531 2.59277 1.60156L0.12207 9.01367C0.0830078 9.13086 0.0830078 9.25293 0.0634766 9.375H11.7188V0ZM0 10.9375V22.6562C0 23.9502 1.0498 25 2.34375 25H22.6562C23.9502 25 25 23.9502 25 22.6562V10.9375H0Z" 
                        fill="black"/>
                        </svg>  
                        My Orders</p
                    >
                    </li>
                </ul>
                    )  
                }
            </div>
        </div>
    )
}
export default Dropdown;