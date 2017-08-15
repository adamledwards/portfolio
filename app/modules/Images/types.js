// @flow

export type Image = {
  src: string
}

export type DisplayProps = {
  data: {
    imageCount: 1 | 2,
    image1: Image,
    image2: Image,
  }
}
