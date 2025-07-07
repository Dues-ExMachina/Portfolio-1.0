'use client';
import Link from 'next/link';

const Credits = () => {
    return (
        <main className="min-h-screen bg-gradient-to-b from-white to-slate-100 text-gray-800 px-6 py-12">
            <div className="max-w-3xl mx-auto space-y-10">
                <h1 className="text-3xl font-bold text-center">Credits & Acknowledgements</h1>

                {/* 3D Model */}
                {/* <section className="space-y-2">
                    <h2 className="text-xl font-semibold">🚀 3D Model</h2>
                    <p>
                        <Link
                            href="https://skfb.ly/pxPOC"
                            target="_blank"
                            className="text-blue-600 underline hover:text-blue-800"
                        >
                            "Liberator-class Starfighter (Astro Interceptor)"
                        </Link>{' '}
                        by <strong>rendy.six</strong> is licensed under{' '}
                        <Link
                            href="http://creativecommons.org/licenses/by/4.0/"
                            target="_blank"
                            className="text-blue-600 underline hover:text-blue-800"
                        >
                            Creative Commons Attribution 4.0
                        </Link>.
                    </p>
                </section> */}

                {/* Design Credit */}
                <section className="space-y-2">
                    <h2 className="text-xl font-semibold">🎨 UI Design Inspiration</h2>
                    <p>
                        Design inspired from a Figma file by{' '}
                        <Link
                            href="https://www.figma.com/@Jayendra"
                            target="_blank"
                            className="text-blue-600 underline hover:text-blue-800"
                        >
                            Jayendra
                        </Link>. You can view the original design on{' '}
                        <Link
                            href="https://www.figma.com/community/file/1192903581929005722"
                            target="_blank"
                            className="text-blue-600 underline hover:text-blue-800"
                        >
                            Figma Community
                        </Link>.
                    </p>
                </section>

                {/* Favicon */}
                <section className="space-y-2">
                    <h2 className="text-xl font-semibold">🔖 Favicon</h2>
                    <p>
                        Favicon icon sourced from{' '}
                        <Link
                            href="https://www.flaticon.com/free-icons/lightsaber"
                            target="_blank"
                            className="text-blue-600 underline hover:text-blue-800"
                        >
                            Lightsaber icons by Nhor Phai on Flaticon
                        </Link>.
                    </p>
                </section>

                {/* Guru Credit */}
                <section className="space-y-2">
                    <h2 className="text-xl font-semibold">🙏 My Gurudev</h2>
                    <p>
                        All thanks to{' '}
                        <Link
                            href="https://www.youtube.com/channel/UCeVMnSShP_Iviwkknt83cww"
                            target="_blank"
                            className="text-blue-600 underline hover:text-blue-800"
                        >
                            CodeWithHarry
                        </Link>{' '}
                        for being a true inspiration and guide throughout my web development journey.
                    </p>
                </section>

                <div className="text-center pt-10 text-gray-500 text-sm">
                    Last updated: {new Date().toLocaleDateString()}
                </div>
            </div>
        </main>
    );
};

export default Credits;
