import React from 'react'
import { Card, CardHeader, CardBody } from '@nextui-org/react'
import Image from '@/components/Image'

type MemberProps = {
  name: string
  word: string
  role: string
  imageUrl: string
}

const Member: React.FC<MemberProps> = ({ name, word, role, imageUrl }) => {
  return (
    <Card className="py-4">
      <CardHeader className="flex-col items-start px-1 pb-0"></CardHeader>
      <div>
        <p className="text-tiny uppercase">
          {name} / {role}
        </p>
      </div>
      <CardBody className="overflow-visible">
        <Image
          src={imageUrl}
          alt="avatar"
          width={400}
          height={400}
          className="h-48 w-48 rounded-xl object-cover transition-transform hover:scale-95"
        />
      </CardBody>
      <div>
        <small className="text-default-500">{word}</small>
      </div>
    </Card>
  )
}

export default Member
