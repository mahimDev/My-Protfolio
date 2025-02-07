
const ContactUs = () => {
    return (
        <div className="lg:flex justify-center ">
            {/* my info */}
            <div className="w-full lg:border-r  max-w-xl rounded-lg bg-white px-10 pb-10 pt-8 shadow-md dark:bg-zinc-900">
                <div className="mb-6">
                    <h2 className="text-center text-4xl font-semibold tracking-tight text-gray-200">My infomations</h2>

                </div>
                <form className="w-full space-y-6">
                    <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
                        <label className="block text-lg font-medium" htmlFor="name">
                            Email : <br /> md286667@gmail.com                    </label>

                    </div>
                    <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
                        <label className="block text-lg font-medium" htmlFor="name">
                            Number : <br /> 01749746072</label>

                    </div>
                    <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
                        <label className="block text-lg font-medium" htmlFor="name">
                            What&apos;sapp Number : <br /> 01749746072                   </label>

                    </div>
                    <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
                        <label className="block text-lg font-medium" htmlFor="name">
                            Address : <br />7830 Faridpur,Dhaka,Bangladesh                </label>

                    </div>

                </form>
            </div>
            {/* contact info  */}
            <div className="w-full lg:border-l  max-w-xl rounded-lg bg-white px-10 pb-10 pt-8 shadow-md dark:bg-zinc-900">
                <div className="mb-6">
                    <h2 className="text-center text-4xl font-semibold tracking-tight text-gray-200">Contact Us</h2>
                    <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">We&apos;d love to hear from you!</p>
                </div>
                <form className="w-full space-y-6">
                    <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
                        <label className="block font-medium" htmlFor="name">
                            Mobile Number
                        </label>
                        <input
                            className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                            id="name"
                            placeholder="Your Number"
                            name="name"
                            type="text"
                        />
                    </div>
                    <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
                        <label className="block font-medium" htmlFor="_email">
                            Email
                        </label>
                        <input
                            className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                            id="_email"
                            placeholder="Your Email"
                            name="email"
                            type="email"
                        />
                    </div>
                    <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
                        <label className="block font-medium" htmlFor="_message">
                            Message
                        </label>
                        <textarea
                            className="min-h-[80px] w-full rounded border px-3 py-2 leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                            id="_message"
                            placeholder="what's in your mind"
                            name="message"
                        />
                    </div>
                    <button className="rounded-md bg-gradient-to-r from-[#1a1a1ae5] to-[#424141] px-4 py-2 text-white transition-colors hover:bg-gray-300 dark:bg-gray-600 w-full ">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;