export default function Input({name, type, label}) {
    return <div className="relative">
        <input
            type={type}
            name={name}
            id={'name'}
            placeholder={' '}
            required
            className='p-4 h-[50px] lg:h-[70px] rounded-lg block w-full px-0 mt-0 bg-transparent border-2 appearance-none focus:outline-none focus:ring-0 focus:border-highlighted border-gray-200'
        />
        <label htmlFor='name'
               className='absolute duration-300 top-1/2 -translate-y-1/2 left-3 z-1 origin-0 text-white'>{label}</label>

    </div>
}