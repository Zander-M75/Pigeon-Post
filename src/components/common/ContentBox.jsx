export default function ContentBox({ children, className }) {
    return (
        <div className="relative overflow-visible">
            <div className={`bg-[#A9A9A9] mt-12 mb-12 py-40 px-14 shadow-inner border border-gray-200 max-w-4xl mx-auto ${className || ''}`}
                 style={{
                     clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 10px calc(100% - 10px), 0 calc(100% - 10px))'
                 }}>
                {children}
            </div>
        </div>
    )
}