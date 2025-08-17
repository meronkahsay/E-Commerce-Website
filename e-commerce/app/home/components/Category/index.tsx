
import Button from "@/app/sharedComponents/Button";
export default function Home() {
  return (
    <div className="ml-30 mr-30 mt-30 ">  
    <div className="flex relative gap-80 py-25 h-140   bg-black px-20 text-white">
      
      <div className="max-w-lg" >
        <p className="text-green-500 font-semibold mb-2">Categories</p>
        <h1 className="text-5xl font-bold leading-snug mb-6">
          Enhance Your <br /> Music Experience
        </h1>
        <div className="flex gap-4 mb-8">
          {[
            { time: "23", label: "Hours" },
            { time: "05", label: "Days" },
            { time: "59", label: "Minutes" },
            { time: "35", label: "Seconds" },
          ].map((item, idx) => (
            <div key={idx} className="relative flex flex-col items-center bg-white text-black rounded-full p-4 w-20 h-20 justify-center">
              <span className="font-bold text-lg">{item.time}</span>
              <span className="text-xs">{item.label}</span>
            </div>
          ))}
        </div>
    
        <Button
  variant="default"
  size="short"
  onClickHandler={() => {}}
  className="mb-4"
  buttonText={<a href="/home">Buy Now!</a>}
/>
      </div>
    
      <div>
       <img src="/images/bluetooth.png" alt="" className="absolute top-[-190]  right-20 w-220" />
      </div>
    </div>
    </div>
  );
}