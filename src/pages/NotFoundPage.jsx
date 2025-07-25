export default function NotFoundPage() {

    return (
        <div style={{
            display: "flex",
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 20,
            width: '100%',
            height: 'calc(100vh - 97px)'
        }}>
            <img
                style={{ width: '100px', height: '100px' }}
                src="https://images.vexels.com/media/users/3/134743/isolated/preview/97ae591756f3dc69db88c09fd097319a-sad-face-emoji-emoticon.png"
            />
            <h1 style={{ fontWeight: 800 }}>404 - Not Found</h1>
        </div>
    )
}