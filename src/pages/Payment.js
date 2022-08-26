export default function Payment() {
    return(
        <div>
            <div className="grid justify-center items-center py-20">
                <div className="bg-gray-200 rounded-full px-7 py-10 mb-7">
                    <svg width="134" height="106" viewBox="0 0 134 106" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M45.5123 103.918L1.9623 57.7207C-0.654101 54.9452 -0.654101 50.4451 1.9623 47.6694L11.4373 37.6181C14.0537 34.8424 18.2962 34.8424 20.9126 37.6181L50.25 68.7387L113.087 2.08159C115.704 -0.693864 119.946 -0.693864 122.563 2.08159L132.038 12.1329C134.654 14.9083 134.654 19.4084 132.038 22.1842L54.9876 103.918C52.371 106.694 48.1287 106.694 45.5123 103.918Z" fill="#051D4C"/>
                    </svg>
                </div>
                <div className="flex justify-center mb-8">Payment Successful</div>
                <button className="bg-[#051D4C] rounded-lg text-white py-4">Continue Shopping</button>
            </div>
        </div>
    )
}