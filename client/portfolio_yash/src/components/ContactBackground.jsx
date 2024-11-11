/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: ricksticky (https://sketchfab.com/ricksticky)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/simple-jellyfish-f77876d8297846eeb23c4ad82dbebb97
Title: Simple Jellyfish
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

  const ContactBackground = (props) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/simple_jellyfish.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="1c184666151e4f70b93148e3d0073f9dfbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Armature"
                  position={[0, -2.385, 2.879]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}>
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_21"
                      geometry={nodes.Object_21.geometry}
                      material={materials['Scene_-_Root']}
                      skeleton={nodes.Object_21.skeleton}
                    />
                    <group name="Object_20" scale={100} />
                  </group>
                </group>
                <group name="Group34460" scale={100} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/simple_jellyfish.glb')

export default ContactBackground