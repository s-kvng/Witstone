import { useState , useEffect} from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";

//components
import Footer from "@/Components/Footer";
import MoonIcon from "@/Components/ThemeIcons";
import SunIcon from "@/Components/SunIcon";

// custom hooks
import useThemeSwitcher from "@/hooks/useThemeSwitcher";

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const [mode, setMode] = useThemeSwitcher();

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulating the loading time
        const timeout = setTimeout(() => {
          setIsLoading(false);
        }, 2000);
    
        return () => {
          clearTimeout(timeout);
        };
      }, []);

    

    return (
        <>
            {isLoading ? (
                <div className="fixed inset-0 flex justify-center items-center bg-gray-900/10 dark:bg-gray-800 opacity-100 transition-opacity ease-in duration-500">
                    <div className="loader">
                    </div>
                </div>
            ) : (
                <div className="h-screen bg-gradient-to-r from-gray-100 to-gray-200 dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-950 overflow-auto relative">
                    <nav className="bg-white fixed top-0 left-0 right-0 opacity-99 z-[999]  dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 shadow-md">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex justify-between h-16">
                                <div className="flex">
                                    <div className="shrink-0 flex items-center">
                                        <Link href="/">
                                            <ApplicationLogo className="block w-20 h-20 absolute top-0" />
                                        </Link>
                                    </div>

                                    <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                        <NavLink
                                            href={route("posts.index")}
                                            active={route().current(
                                                "posts.index"
                                            )}
                                        >
                                            Feed
                                        </NavLink>
                                        <NavLink
                                            href={route("posts.create")}
                                            active={route().current(
                                                "posts.create"
                                            )}
                                        >
                                            Post
                                        </NavLink>
                                        <NavLink
                                            href={route("channel")}
                                            active={route().current("channel")}
                                        >
                                            Channel
                                        </NavLink>
                                    </div>
                                </div>

                                <div className="hidden sm:flex sm:items-center sm:ml-6">
                                    <div className="ml-3 relative">
                                        <Dropdown>
                                            <Dropdown.Trigger>
                                                <span className="inline-flex rounded-md">
                                                    <button
                                                        type="button"
                                                        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"
                                                    >
                                                        {user.name}

                                                        <svg
                                                            className="ml-2 -mr-0.5 h-4 w-4"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </button>
                                                </span>
                                            </Dropdown.Trigger>

                                            <Dropdown.Content>
                                                <Dropdown.Link
                                                    href={route("profile.edit")}
                                                >
                                                    Profile
                                                </Dropdown.Link>
                                                <Dropdown.Link
                                                    href={route("logout")}
                                                    method="post"
                                                    as="button"
                                                >
                                                    Log Out
                                                </Dropdown.Link>
                                            </Dropdown.Content>
                                        </Dropdown>
                                    </div>
                                </div>

                                <div className="-mr-2 flex items-center sm:hidden">
                                    <button
                                        onClick={() =>
                                            setShowingNavigationDropdown(
                                                (previousState) =>
                                                    !previousState
                                            )
                                        }
                                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out"
                                    >
                                        <svg
                                            className="h-6 w-6"
                                            stroke="currentColor"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                className={
                                                    !showingNavigationDropdown
                                                        ? "inline-flex"
                                                        : "hidden"
                                                }
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                            <path
                                                className={
                                                    showingNavigationDropdown
                                                        ? "inline-flex"
                                                        : "hidden"
                                                }
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div
                            className={
                                (showingNavigationDropdown
                                    ? "block"
                                    : "hidden") + " sm:hidden"
                            }
                        >
                            <div className="pt-2 pb-3 space-y-1">
                                <ResponsiveNavLink
                                    href={route("channel")}
                                    active={route().current("channel")}
                                >
                                    Channel
                                </ResponsiveNavLink>
                                <ResponsiveNavLink
                                    href={route("posts.index")}
                                    active={route().current("posts.index")}
                                >
                                    Feed
                                </ResponsiveNavLink>
                            </div>

                            <div className="pt-4 pb-1 border-t border-gray-200 dark:border-gray-600">
                                <div className="px-4">
                                    <div className="font-medium text-base text-gray-800 dark:text-gray-200">
                                        {user.name}
                                    </div>
                                    <div className="font-medium text-sm text-gray-500">
                                        {user.email}
                                    </div>
                                </div>

                                <div className="mt-3 space-y-1">
                                    <ResponsiveNavLink
                                        href={route("profile.edit")}
                                    >
                                        Profile
                                    </ResponsiveNavLink>
                                    <ResponsiveNavLink
                                        method="post"
                                        href={route("logout")}
                                        as="button"
                                    >
                                        Log Out
                                    </ResponsiveNavLink>
                                </div>
                            </div>
                        </div>
                    </nav>

                    {header && (
                        <header className="bg-white dark:bg-gray-800 shadow mt-20">
                            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 uppercase">
                                {header}
                            </div>
                        </header>
                    )}

                    <main className="">{children}</main>
                    <button
                        onClick={() => {
                            setMode(mode === "light" ? "dark" : "light");
                        }}
                        className=" w-10 h-10 fixed sm:top-[75%] top-[85%] right-[10%] p-1 flex justify-center items-center rounded-full bg-sky-400 z-50"
                    >
                        {mode === "dark" ? (
                            <SunIcon className={""} />
                        ) : (
                            <MoonIcon className={" fill-gray-700/10"} />
                        )}
                    </button>
                    <Footer />
                </div>
            )}
        </>
    );
}
