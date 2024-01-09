import React from 'react'
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Image from '@/components/Image'

type MemberProps = {
  name: string;
  word: string;
  role: string;
  imageUrl: string;
}

const Member: React.FC<MemberProps> = ({ name, word, role, imageUrl }) => {
  return (
      <Card className="py-4">
        <CardHeader className="pb-0 px-1 flex-col items-start">
        </CardHeader>
        <div><p className="text-tiny uppercase">{name} / {role}</p></div>
        <CardBody className="overflow-visible">
          <Image
            src={imageUrl}
            alt="avatar"
            width={400}
            height={400}
            className="h-48 w-48 hover:scale-95 transition-transform object-cover rounded-xl"
          />
        </CardBody>
        <div><small className="text-default-500">{word}</small></div>
      </Card>
  )
}

export default Member