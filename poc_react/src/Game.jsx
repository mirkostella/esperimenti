import { useGLTF } from '@react-three/drei'
import useOctree from './useOctree'
import Player from './Player'
import useOctreeHelper from './useOctreeHelper'
import { useRef } from 'react'


export default function Physics() {
  const { nodes, scene } = useGLTF('./models/fondale.glb')
  const octree = useOctree(scene)
  
  useOctreeHelper(octree)

  const colliders = useRef([])

 
  return (
    <>
     <group dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Landscape001.geometry}
        material={nodes.Landscape001.material}
        rotation={[0, 1.57, 0]}
      />
    </group>
  
      <Player octree={octree} colliders={colliders.current} />
    </>
  )
}

useGLTF.preload("./models/coral_piece.glb");