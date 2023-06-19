<>

<div className="h-16 w-16 bg-red-50 dark:bg-red-800/20 flex items-center justify-center rounded-full">
<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    className="w-7 h-7 stroke-red-500"
>
    <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
    />
</svg>
</div>

<div className="sm:fixed sm:top-0 sm:right-0 p-6 text-right">
{auth.user ? (
    <Link
        href={route('dashboard')}
        className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
    >
        Dashboard
    </Link>
) : (
    <>
        <Link
            href={route('login')}
            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
        >
            Log in
        </Link>

        <Link
            href={route('register')}
            className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
        >
            Register
        </Link>
    </>
)}
</div>

</>