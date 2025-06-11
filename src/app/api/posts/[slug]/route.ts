import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const postsDirectory = path.join(process.cwd(), 'src/posts');
    const filePath = path.join(postsDirectory, `${params.slug}.md`);

    if (!fs.existsSync(filePath)) {
      return new NextResponse('Post not found', { status: 404 });
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data: frontMatter, content } = matter(fileContent);

    return NextResponse.json({
      content,
      frontMatter
    });
  } catch (error) {
    console.error('Error reading post:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
} 