import ShopBoard from '@/components/ShopBoard'

export default function Slider1({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex justify-between">
            {children}
            <ShopBoard />
        </div>
    )
}