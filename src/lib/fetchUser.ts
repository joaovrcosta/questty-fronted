export async function fetchUser(id: string) {
  try {
    const userResponse = await fetch(`http://localhost:3333/profile/${id}`)

    if (!userResponse.ok) {
      throw new Error(`HTTP Error: ${userResponse.status}`)
    }

    const user = await userResponse.json()

    console.log(user)

    return user
  } catch (error) {
    console.error('Error fetching user:', error)
    throw error
  }
}
