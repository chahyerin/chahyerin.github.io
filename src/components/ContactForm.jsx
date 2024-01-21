'use client';

import { useForm } from 'react-hook-form';
import Form from '@/components/Form';
import * as emailjs from '@emailjs/browser';

export default function ContactForm({}) {
	const {
		register,
		handleSubmit,
		formState: { isValid },
	} = useForm();

	const handleSubmitForm = handleSubmit((data) => {
		console.log({ data });
		emailjs
			.send('service_camt41p', 'template_nuxxtrq', data, 'rYAwizeij8MKwkSFH')
			.then(
				function (response) {
					console.log('SUCCESS!', response.status, response.text);
					alert('이메일 전송에 성공했습니다');
				},
				function (error) {
					console.log('FAILED...', error);
					alert('이메일 전송에 실패했습니다');
				}
			)
			.catch((e) => {
				alert(e);
			});
	});

	return (
		<>
			<Form.Form onSubmit={handleSubmitForm} className={'w-full max-w-[832px]'}>
				<div className={'text-2xl'}>start from zero</div>
				<div className={'w-full text-4xl font-bold leading-[44px] mt-8'}>
					안녕하세요,
					<br />
					프로젝트에 대해 설명해주세요.
				</div>
				<div className={'flex gap-8 mt-[52px]'}>
					<Form.InputGroup className={'w-full'}>
						<Form.Label htmlFor={'companyName'} required>
							회사명
						</Form.Label>
						<Form.Input id={'companyName'} {...register('companyName', { required: true })} placeholder='text' />
					</Form.InputGroup>
					<Form.InputGroup className={'w-full'}>
						<Form.Label htmlFor={'managerName'} required>
							담당자명
						</Form.Label>
						<Form.Input id={'managerName'} {...register('managerName', { required: true })} placeholder='text' />
					</Form.InputGroup>
				</div>
				<div className={'flex gap-8 mt-3'}>
					<Form.InputGroup className={'w-full'}>
						<Form.Label htmlFor={'managerRank'}>직급</Form.Label>
						<Form.Input id={'managerRank'} {...register('managerRank')} placeholder='text' />
					</Form.InputGroup>
					<Form.InputGroup className={'w-full'}>
						<Form.Label htmlFor={'managerContact'} required>
							연락처
						</Form.Label>
						<Form.Input id={'managerContact'} {...register('managerContact', { required: true })} placeholder='text' />
					</Form.InputGroup>
				</div>
				<div className={'flex gap-8 mt-3'}>
					<Form.InputGroup className={'w-full'}>
						<Form.Label htmlFor={'email'} required>
							이메일
						</Form.Label>
						<Form.Input id={'email'} type={'email'} {...register('email', { required: true })} placeholder='text' />
					</Form.InputGroup>
					<Form.InputGroup className={'w-full'}>
						<Form.Label htmlFor={'attachedFile'}>첨부파일</Form.Label>
						<Form.Input id={'attachedFile'} type={'file'} {...register('attachedFile', { required: true })} placeholder='text' />
					</Form.InputGroup>
				</div>
				<div className={'flex gap-8 mt-3'}>
					<Form.InputGroup className={'w-full'}>
						<Form.Label htmlFor={'budget'} required>
							예산
						</Form.Label>
						<Form.Select id={'budget'} {...register('budget', { required: true })}>
							<option value='100000'>50~100만원</option>
							<option value='1000000'>100~500만원</option>
							<option value='5000000'>500~1000만원</option>
							<option value='10000000'>1000만원~</option>
						</Form.Select>
					</Form.InputGroup>
					<Form.InputGroup className={'w-full'}>
						<Form.Label htmlFor={'introducedBy'} required>
							유입경로
						</Form.Label>
						<Form.Select id={'introducedBy'} {...register('introducedBy', { required: true })}>
							<option value='search'>검색</option>
							<option value='recommendation'>지인추천</option>
							<option value='ad'>광고</option>
							<option value='etc'>기타</option>
						</Form.Select>
					</Form.InputGroup>
				</div>
				<Form.InputGroup className={'mt-7'}>
					<Form.Label htmlFor={'description'} required>
						프로젝트 설명
					</Form.Label>
					<Form.Textarea id={'description'} {...register('description', { required: true })} placeholder='text' className={'h-[190px]'} />
				</Form.InputGroup>

				<button
					className={
						'p-4 disabled:cursor-not-allowed cursor-pointer border mt-10 border-gray-500 transition-all duration-300 hover:bg-white hover:text-black'
					}
					type={'submit'}
				>
					제출하기
				</button>
			</Form.Form>
		</>
	);
}
