import { useContext } from "react";
import { ReadingTimeContext } from "./main";

export default function RightSide() {
    const { time } = useContext(ReadingTimeContext);

    return (
        <div className="md:w-2/6 my-10" >
            <h1
                className="p-4 bg-[#6047EC1A] border-2 border-[#6047EC] font-bold text-center rounded-md text-[#6047EC]">
                Spent time on read: {time} min
            </h1>
            <div className="p-4 bg-gray-100 rounded-md mt-4">
                <h1
                    className="font-bold mt-3">
                    Bookmarked blogs: 8
                </h1>
                <p
                    className="text-sm my-4 p-3 bg-white rounded-md">
                    Component lifecycle in React — Class component vs Functional component
                </p>
            </div>
        </div>
    )
}