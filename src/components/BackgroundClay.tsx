import { Perspective } from '../types';

interface BackgroundClayProps {
  perspective: Perspective;
}

export default function BackgroundClay({ perspective }: BackgroundClayProps) {
  const isStudent = perspective === 'student';

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 transition-colors duration-700">
      {/* Background Gradient Base */}
      <div
        className={`absolute inset-0 transition-all duration-700 ease-out ${
          isStudent
            ? 'bg-gradient-to-br from-[#F5F0FF] via-[#E8F8F5] to-[#FFF1F6]'
            : 'bg-gradient-to-br from-[#ECE8E1] via-[#E2EAE5] to-[#E9E1DE]'
        }`}
      />

      {/* Floating 3D Clay Blobs with Soft Gaussian Depth */}
      {/* Blob 1: Top Left */}
      <div
        className={`absolute -top-16 -left-16 w-80 h-80 rounded-[50px] filter blur-2xl opacity-60 transition-all duration-700 animate-clay-float-slow ${
          isStudent
            ? 'bg-gradient-to-br from-purple-300 via-pink-200 to-indigo-200'
            : 'bg-gradient-to-br from-emerald-200 via-stone-300 to-amber-200'
        }`}
      />

      {/* Blob 2: Top Right */}
      <div
        className={`absolute top-48 -right-20 w-96 h-96 rounded-[60px] filter blur-3xl opacity-50 transition-all duration-700 animate-clay-float-rev ${
          isStudent
            ? 'bg-gradient-to-br from-sky-200 via-teal-200 to-purple-200'
            : 'bg-gradient-to-br from-stone-300 via-rose-200 to-slate-300'
        }`}
      />

      {/* Blob 3: Center Mid-Page */}
      <div
        className={`absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 rounded-[45px] filter blur-3xl opacity-40 transition-all duration-700 animate-clay-float-slow ${
          isStudent
            ? 'bg-gradient-to-br from-pink-200 via-purple-100 to-blue-200'
            : 'bg-gradient-to-br from-amber-100 via-stone-200 to-emerald-200'
        }`}
      />

      {/* Blob 4: Bottom Right */}
      <div
        className={`absolute -bottom-24 -right-16 w-96 h-96 rounded-[55px] filter blur-3xl opacity-55 transition-all duration-700 animate-clay-float-rev ${
          isStudent
            ? 'bg-gradient-to-tr from-indigo-200 via-pink-200 to-sky-100'
            : 'bg-gradient-to-tr from-slate-300 via-emerald-200 to-amber-200'
        }`}
      />

      {/* Blob 5: Bottom Left */}
      <div
        className={`absolute bottom-32 -left-20 w-80 h-80 rounded-[50px] filter blur-2xl opacity-45 transition-all duration-700 animate-clay-float-slow ${
          isStudent
            ? 'bg-gradient-to-br from-mint-200 via-sky-200 to-purple-200'
            : 'bg-gradient-to-br from-stone-200 via-rose-100 to-emerald-100'
        }`}
      />

      {/* Subtle Clay Texture Stipple Overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] mix-blend-multiply"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}
      />
    </div>
  );
}
