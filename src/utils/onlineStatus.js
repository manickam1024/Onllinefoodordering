import { useState, useEffect } from 'react'

const onlinestatus = () => {
  const online = navigator.onLine

  return online
}

export default onlinestatus
