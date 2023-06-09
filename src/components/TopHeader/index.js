export default function TopHeader() {
    const sonyLogo = "/assets/images/sony.png";
    return (
        <div className="bg-black relative  h-10">
            <div
                style={{ backgroundImage: `url(${sonyLogo})` }}
                className={`
                absolute
                h-full 
                w-16
                bg-right 
                bg-no-repeat 
                bg-cover 
                right-4
                `}
            ></div>
        </div>
    )
}