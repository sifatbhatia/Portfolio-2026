'use client'

export default function AuroraTransition() {
  return (
    <div className="absolute top-0 left-0 right-0 h-[600px] z-10 pointer-events-none overflow-hidden select-none">
       {/* Complex organic gradient wave - Dark to Cream */}
       <div 
         className="absolute bottom-[-150px] left-[-30%] right-[-30%] h-[600px] blur-[120px] opacity-25 mix-blend-screen"
         style={{
           background: 'radial-gradient(circle at 25% 100%, #C41E3D 0%, transparent 60%), radial-gradient(circle at 75% 100%, #6366f1 0%, transparent 60%), radial-gradient(circle at 50% 115%, #fb923c 0%, transparent 60%)'
         }}
       />
    </div>
  )
}
