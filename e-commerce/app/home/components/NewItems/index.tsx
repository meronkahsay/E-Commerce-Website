import Image from "next/image";
import Button from "@/app/sharedComponents/Button";
import RedBadge from "@/app/sharedComponents/Badge";
export default function NewItem() {
    return (
        <section className="px-0 py-16  mr-30 ml-30">
            <RedBadge text="Featured" />
            <h2 className="text-3xl font-bold mb-8 mt-5">New Arrival</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative bg-black ">
                    <Image
                        src="/images/balckgamebox.png"
                        alt="PlayStation 5"
                        width={1000}
                        height={800}
                        className="h-auto w-full"
                    />
                    <div className="absolute bottom-6 left-6 text-white">
                        <h3 className="font-bold text-4xl">PlayStation 5</h3>
                        <p className="text-lg mb-2">Black and White version of the PS5 coming out on sale.</p>
                        <Button
                            buttonText="Shop Now"
                            size="short"
                            variant="noBg"
                            onClickHandler={() => { }}
                            className="text-sm font-light w-28 "
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <div className="relative col-span-2">
                        <Image
                            src="/images/hat.jpg"
                            alt="Women's Collection"
                            width={250}
                            height={250}
                            className="rounded-lg w-full "
                            style={{transform:"scaleX(-1)"}}
                        />
                        <div className="absolute bottom-6 left-6 text-white">
                            <h3 className="font-bold text-4xl">Women's Collections</h3>
                            <p className="text-lg mb-2">Featured woman collections that give you another vibe.</p>
                            <Button
                                buttonText="Shop Now"
                                size="short"
                                variant="noBg"
                                onClickHandler={() => { }}
                                className=" text-sm font-light w-28"
                            />
                        </div>
                    </div>
                    <div className="relative  bg-black">
                        <Image
                            src="/images/amazonBT.png"
                            alt="Speakers"
                            width={250}
                            height={250}
                            className="rounded-lg object-cover w-full"
                        />
                        <div className="absolute bottom-6 left-6 text-white">
                            <h3 className="font-bold text-4xl">Speakers</h3>
                            <p className="text-lg mb-2">Amazon wireless speakers</p>
                            <Button
                                buttonText="Shop Now"
                                size="short"
                                variant="noBg"
                                onClickHandler={() => { }}
                                className=" text-sm font-light w-28"
                            />
                        </div>
                    </div>
                    <div className="relative  bg-black">
                        <Image
                            src="/images/gucciperfume.png"
                            alt="Perfume"
                            width={250}
                            height={250}
                            className="rounded-lg object-cover w-full"
                        />
                        <div className="absolute bottom-6 left-6 text-white">
                            <h3 className="font-bold text-4xl">Perfume</h3>
                            <p className="text-lg mb-2">GUCCI INTENSE OUD EDP</p>
                            <Button
                                buttonText="Shop Now"
                                size="short"
                                variant="noBg"
                                onClickHandler={() => { }}
                                className=" text-sm font-light w-28"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}