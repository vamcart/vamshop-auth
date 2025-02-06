const AuthLayout = ({children}: React.ReactNode) => {
  return (
    <div className="h-full flex items-center justify-center flex h-full flex-col items-center 
    justify-center bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      {children}
    </div>
  )
}

export default AuthLayout;