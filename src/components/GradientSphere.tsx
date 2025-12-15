interface GradientSphereProps {
  firstSphere: string;
  secondSphere: string;
}

export default function GradientSphere({ firstSphere, secondSphere }: GradientSphereProps) {
  return (
    <>
      <div className={`sphere ${firstSphere}`}></div>
      <div className={`sphere ${secondSphere}`}></div>
    </>
  );
}
