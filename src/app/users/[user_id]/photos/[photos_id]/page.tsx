import React from 'react'

interface Props {
  params: Promise<{
    user_id: string,
    photos_id: string,
  }>
}

export default async function SinglePhotoPage({ params }: Props) {
  const { user_id, photos_id } = await params;
  return (
    <div className="p-6">
      <h1>User ID: {user_id}</h1>
      <h1>Photo ID: {photos_id}</h1>
      Single Photo Page
    </div>
  )
}
